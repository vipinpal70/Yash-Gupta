// Google's Apps Script redirect (exec -> googleusercontent.com/macros/echo)
// is observed to be flaky in practice — the same request occasionally comes
// back 405 for no discernible reason, succeeding on a bare retry. Apps
// Script also always responds HTTP 200, even when the script itself throws,
// so a successful *transport* response isn't enough — the script's own
// `{ ok: boolean }` body has to be checked too, or a broken script (wrong
// sheet name, permissions, etc.) fails silently while looking successful.
export async function postToSheet(
  webhookUrl: string,
  payload: Record<string, unknown>,
  attempts = 2,
): Promise<void> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (response.ok && result?.ok) return;

      lastError = new Error(
        `Sheet webhook did not confirm success: status=${response.status} body=${JSON.stringify(result)}`,
      );
    } catch (error) {
      lastError = error;
    }

    if (attempt < attempts) {
      await new Promise((resolve) => setTimeout(resolve, 400));
    }
  }

  throw lastError;
}

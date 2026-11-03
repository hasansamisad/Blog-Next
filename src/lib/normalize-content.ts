type LegacyBlock = {
  children?: { text?: string }[];
};

const isLegacyBlock = (value: unknown): value is LegacyBlock =>
  typeof value === 'object' &&
  value !== null &&
  Array.isArray((value as LegacyBlock).children);

/**
 * Se o conteúdo for o JSON antigo (Blocks guardado como texto),
 * junta o texto de cada bloco, uma linha por parágrafo.
 * Qualquer outro texto passa sem alteração.
 */
export function normalizeContent(content: unknown): string {
  if (typeof content !== 'string') return '';

  const trimmed = content.trim();
  if (!trimmed.startsWith('[')) return content;

  try {
    const parsed: unknown = JSON.parse(trimmed);

    if (!Array.isArray(parsed) || !parsed.every(isLegacyBlock)) {
      return content;
    }

    return parsed
      .map((block) => (block.children ?? []).map((c) => c.text ?? '').join(''))
      .join('\n');
  } catch {
    return content;
  }
}

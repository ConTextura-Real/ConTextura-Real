export function sanitizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function sanitizeSubmission(data) {
  return {
    nombre: sanitizeText(data?.nombre),
    correo: sanitizeText(data?.correo),
    mensaje: sanitizeText(data?.mensaje),
  };
}

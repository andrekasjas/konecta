export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("es-Co", {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}
/*
 * Table Column  used as a Table Header (th) or
 * with in a table row
 */
export const TableColumn = ({ intent, label, value }) =>
  intent === 'header' ? <span>{label}</span> : <span>{value}</span>;

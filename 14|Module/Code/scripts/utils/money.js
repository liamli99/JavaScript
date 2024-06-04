// Convert cents to dollars and keep 2 decimal places
export function formatCurrency(priceCents)  {
    return (priceCents / 100).toFixed(2);
}
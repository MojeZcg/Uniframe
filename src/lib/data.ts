export async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/products/");
  const data = await res.json();
  return data;
}

export async function fetchTopProducts() {
  const res = await fetch("http://localhost:3000/api/products/top/", {
    method: "GET",
    next: {
      revalidate: 5000,
    },
  });
  const data = await res.json();
  return data;
}

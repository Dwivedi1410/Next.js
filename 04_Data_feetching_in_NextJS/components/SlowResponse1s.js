export default async function SlowResponse1s() {
  const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=1000");
  const slowResponseData = await slowResponse.json();
  console.log(slowResponseData);

  return <div>{slowResponseData.message}</div>;
}

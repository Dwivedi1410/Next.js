export default async function SlowResponse2s() {
    const slowResponse = await fetch('https://procodrr.vercel.app/?sleep=3000');        
    const slowResponseData = await slowResponse.json();
    console.log(slowResponseData);

    return(
        <div>
        {slowResponseData.message}
      </div>
    )
}
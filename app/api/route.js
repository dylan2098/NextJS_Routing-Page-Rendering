export function GET(request) {
  console.log(request);

  // return response.json();
  return new Response("Hello!");
}

// export function POST(request){
//   console.log(request)

//   // return response.json();
//   return new Response();
// }

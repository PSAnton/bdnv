// import { useEffect } from "react";

// export default function LoginPage() {
//   useEffect(() => {
//     // Load Privy.io widget script
//     if (!document.getElementById("privy-script")) {
//       const script = document.createElement("script");
//       script.id = "privy-script";
//       script.src = "https://widget.privy.io/widget.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   useEffect(() => {
//     // @ts-ignore
//     if (window.Privy) {
//       // @ts-ignore
//       window.Privy.show();
//     } else {
//       window.addEventListener("privy:ready", () => {
//         // @ts-ignore
//         window.Privy.show();
//       });
//     }
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="bg-white rounded-lg shadow p-8 w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <p className="mb-6 text-gray-600">Sign in to access your dashboard.</p>
//         <div id="privy-container" />
//       </div>
//     </div>
//   );
// }

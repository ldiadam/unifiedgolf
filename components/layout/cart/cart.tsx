// import React from "react";
// import { useCart } from "@/hook/booking-context";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { ShoppingCart, Trash2 } from "lucide-react";
// import { format } from "date-fns";
// import Image from "next/image";

// export function CartComponent() {
//   const { state, dispatch } = useCart();

//   const removeBooking = (bookingId: string) => {
//     dispatch({ type: "REMOVE_BOOKING", payload: bookingId });
//   };

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button className="relative hover:bg-primary" variant="ghost">
//           <div className="flex -ml-1 gap-2 items-center">
//             <div className="relative">
//               <ShoppingCart size={22} />
//               {state.items.length > 0 && (
//                 <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
//                   {state.items.length}
//                 </span>
//               )}
//             </div>
//             <span className="block lg:hidden">Your Cart</span>
//           </div>
//         </Button>
//         {/* <Button variant="ghost" size="icon" className="relative">
//           <div className="flex gap-2 lg:hidden">
//             <ShoppingCart size={18} />
//             <span className="block lg:hidden">Your Cart</span>
//           </div>

//           {state.items.length > 0 && (
//             <span className="absolute text-xs flex items-center justify-center">
//               {state.items.length}
//             </span>
//           )}
//         </Button> */}
//       </SheetTrigger>
//       <SheetContent className="w-[400px] sm:w-[540px]">
//         <SheetHeader>
//           <SheetTitle>Your Bookings</SheetTitle>
//         </SheetHeader>
//         <div className="mt-8 space-y-4">
//           {state.items.map((item) => (
//             <div
//               key={item.bookingId}
//               className="flex items-start space-x-4 p-4 border rounded-lg"
//             >
//               <Image
//                 src={item.imageUrl}
//                 alt={item.name}
//                 width={100}
//                 height={100}
//                 className="rounded-md object-cover"
//               />
//               <div className="flex-1">
//                 <h3 className="font-semibold">{item.name}</h3>
//                 {/* <p className="text-sm text-muted-foreground">
//                   {format(item.startDate, "MMM dd, yyyy")} -{" "}
//                   {format(item.endDate, "MMM dd, yyyy")}
//                 </p> */}
//                 <p className="text-sm text-muted-foreground">
//                   {format(item.date, "MMM dd, yyyy")}
//                 </p>
//                 <p className="font-medium">${item.totalPrice}</p>
//               </div>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => removeBooking(item.bookingId)}
//               >
//                 <Trash2 className="h-4 w-4" />
//               </Button>
//             </div>
//           ))}
//           {state.items.length === 0 && (
//             <p className="text-center text-muted-foreground">
//               No bookings in cart
//             </p>
//           )}
//           {state.items.length > 0 && (
//             <div className="pt-4 border-t">
//               <div className="flex justify-between">
//                 <span className="font-semibold">Total</span>
//                 <span className="font-semibold">${state.total}</span>
//               </div>
//               <Button className="w-full mt-4">Proceed to Checkout</Button>
//             </div>
//           )}
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }

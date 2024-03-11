
import * as React from "react";
import { Platform, Text } from "react-native";



// const H1 = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         role="heading"
//         aria-level="1"
//         // className={cn(
//         //   "web:scroll-m-20 text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl web:select-text",
//         //   className
//         // )}
//         ref={ref}
//         style={{ fontFamily: "Poppins_700Bold", fontSize: 36 }}
//         {...props}
//       />
//     );
//   }
// );

// H1.displayName = "H1";

// const H2 = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         role="heading"
//         aria-level="2"
//         style={[{ fontFamily: "Poppins_600SemiBold", fontSize: 30 }]}
//         // className={cn(
//         //   "web:scroll-m-20 border-b border-border pb-2 text-3xl text-foreground font-semibold tracking-tight first:mt-0 web:select-text",
//         //   className
//         // )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// H2.displayName = "H2";

// const H3 = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         role="heading"
//         aria-level="3"
//         style={{
//           fontFamily: "Poppins_600SemiBold",
//           fontSize: 24,
//           paddingBottom: 8,
//         }}
//         // className={cn(
//         //   "web:scroll-m-20 text-2xl text-foreground font-semibold tracking-tight web:select-text",
//         //   className
//         // )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// H3.displayName = "H3";

// const H4 = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ style, className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         role="heading"
//         aria-level="4"
//         style={{
//           fontFamily: "Poppins_600SemiBold",
//           fontSize: 20,
//           paddingBottom: 8,
          
//         }}
//         // className={cn(
//         //   "web:scroll-m-20 text-xl text-foreground font-semibold tracking-tight web:select-text",
//         //   className
//         // )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// H4.displayName = "H4";

// const P = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         style={{
//           fontFamily: "Poppins_500Medium",
//         }}
//         // className={cn("text-base text-foreground web:select-text", className)}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// P.displayName = "P";

// const BlockQuote = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         // @ts-ignore - role of blockquote renders blockquote element on the web
//         role={Platform.OS === "web" ? "blockquote" : undefined}
//         className={cn(
//           "mt-6 native:mt-4 border-l-2 border-border pl-6 native:pl-3 text-base text-foreground italic web:select-text",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// BlockQuote.displayName = "BlockQuote";

// const Code = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         // @ts-ignore - role of code renders code element on the web
//         role={Platform.OS === "web" ? "code" : undefined}
//         className={cn(
//           "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] text-sm text-foreground font-semibold web:select-text",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// Code.displayName = "Code";

// const Lead = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         className={cn(
//           "text-xl text-muted-foreground web:select-text",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// Lead.displayName = "Lead";

// const Large = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         style={{
//           fontFamily: "Poppins_600SemiBold",
//         }}
//         // className={cn(
//         //   "text-xl text-foreground font-semibold web:select-text",
//         //   className
//         // )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// Large.displayName = "Large";

// const Small = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         style={{
//           fontFamily: "Poppins_500Medium",
//         }}
//         // className={cn(
//         //   "text-sm text-foreground font-medium leading-none web:select-text",
//         //   className
//         // )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// Small.displayName = "Small";

// const Muted = React.forwardRef<TextRef, SlottableTextProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Component = asChild ? Slot.Text : RNText;
//     return (
//       <Component
//         className={cn(
//           "text-sm text-muted-foreground web:select-text",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// Muted.displayName = "Muted";

// export { BlockQuote, Code, H1, H2, H3, H4, Large, Lead, Muted, P, Small };
interface Props {
  children: string;
  style?: any;
}
export const Large = ({ children, style, ...props }: Props) => {
  return (
    <Text style={[{ fontFamily: "Poppins_600SemiBold", fontSize: 24 }, style]} {...props}>{children}</Text>
  );
};

export const Small = ({ children, style, ...props }: Props) => {
  return (
    <Text style={[{ fontFamily: "Poppins_400Regular",fontSize: 12 }, style]} {...props}>
      {children}
    </Text>
  );
};

export const Medium = ({ children, style, ...props }: Props) => {
  return (
    <Text style={[{ fontFamily: "Poppins_500Medium", fontSize: 18 }, style]} {...props}>
      {children}
    </Text>
  );
};

export const H1 = ({ children, style, ...props }: Props) => {
  return (
    <Text style={[{ fontFamily: "Poppins_700Bold", fontSize: 36 }, style]} {...props}>
      {children}
    </Text>
  );
};

export const H2 = ({ children, style, ...props }: Props) => {
  return (
    <Text
      style={[{ fontFamily: "Poppins_600SemiBold", fontSize: 30 }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const H3 = ({ children, style, ...props }: Props) => {
  return (
    <Text
      style={[{ fontFamily: "Poppins_600SemiBold", fontSize: 28 }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
export const Label = ({ children, style, ...props }: Props) => {
  return (
    <Text
      style={[{ fontFamily: "Poppins_600SemiBold"}, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
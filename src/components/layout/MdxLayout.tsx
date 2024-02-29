import { AnimateChildren } from "../animation/AnimateChildren";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <AnimateChildren delay={0.2}> {children} </AnimateChildren>;
}

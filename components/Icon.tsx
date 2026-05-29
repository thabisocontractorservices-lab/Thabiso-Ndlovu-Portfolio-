import {
  TrendingUp,
  Zap,
  Clock,
  Check,
  X,
  Building2,
  FileCheck,
  Atom,
  ArrowRight,
  MessageSquare,
  type LucideProps,
} from "lucide-react";

const map = {
  trend: TrendingUp,
  zap: Zap,
  clock: Clock,
  check: Check,
  x: X,
  building: Building2,
  file: FileCheck,
  atom: Atom,
  arrow: ArrowRight,
  message: MessageSquare,
};

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}

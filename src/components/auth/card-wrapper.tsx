import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Social } from "@/components/auth/social";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  cardDescription?: string;
  footerButtonLabel: string;
  footerButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  cardDescription,
  footerButtonLabel,
  footerButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="w-full flex flex-col gap-y-2 items-center justify-center">
        <CardTitle className="text-3xl font-semibold">{headerLabel}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
          <Link href={footerButtonHref}>{footerButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

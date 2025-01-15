import { ReactNode } from "react";


export interface PageRouteProps {
      pageRoute: string;
    }

    // interfaces/index.ts
export interface ButtonProps { 
      buttonLabel: string;
      buttonSize?: string;
      buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
      action?: () => void;
    }

    
    export interface LayoutProps {
      children: ReactNode;
    }
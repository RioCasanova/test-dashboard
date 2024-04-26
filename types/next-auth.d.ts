// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in User model
   */
  interface User {
    id?: string; // Optional property for user ID
  }

  /**
   * Extends the built-in Session model
   */
  interface Session {
    user?: User;
  }
}

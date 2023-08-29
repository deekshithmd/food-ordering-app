"use-client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

// Testing whether user authenticated or not
const RequiresAuth = ({ children }) => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            setIsLoggedIn(true);
            router.push("/");
        } else {
            router.push("/auth/login");
        }
    }, [isLoggedIn, router]);

    return children;
};

export default RequiresAuth;

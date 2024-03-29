import React, { createContext, useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import Theme from "../Theme/Theme";

export const AppContext = createContext({} as AppContextData);

export function useAuth() {
  return React.useContext(AppContext);
}

interface IbodyUser {
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  phone: string;
  image: string;
  password: string;
}

const users: {} | any = [
  {
    first_name: "Jonh",
    last_name: "Dave",
    email: "jonh@gmail.com",
    bio: "Sou o Jonh dave um desenvolvedor web python fullstack",
    phone: "+244947842187",
    image: "./images/user.jpg",
    password: "123",
  },
  {
    first_name: "Jane",
    last_name: "Terez",
    email: "jane@gmail.com",
    bio: "Sou a Jane dave um desenvolvedor web python fullstack",
    phone: "+244947842187",
    image: "./images/user2.png",
    password: "123",
  },
];

export function AppProvider({ children }: any) {
  const [user, setUser] = React.useState<IbodyUser | any>(null);
  const [loginErrorMessage, setLoginErrorMessage] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    const userToken: any = JSON.parse(localStorage.getItem("Omunga-TOKEN"));
    if (userToken) {
      const findUser = users.filter(
        (user: any) => user.email === userToken.email
      );
      setUser(findUser[0]);
    }
  }, [user]);

  const login = (email: string, password: string) => {
    if (email === "" || password === "") {
      return setLoginErrorMessage("escreva todos os campos");
    }

    const findUser = users.filter((user: any) => user.email === email);

    if (findUser?.length) {
      if (findUser[0].email === email && findUser[0].password === password) {
        const userToken: string = Math.random().toString(2).substring(2);
        localStorage.setItem(
          "Omunga-TOKEN",
          JSON.stringify({ email, userToken })
        );
        setUser(findUser[0]);
        setLoginErrorMessage("");
        router.push("/");
      } else {
        setLoginErrorMessage("email ou senha errada");
      }
    } else {
      setLoginErrorMessage("Usuário não encontrado");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("Omunga-TOKEN");
  };

  const provided = {
    user,
    login,
    logout,
    loginErrorMessage,
  };

  return (
    <ThemeProvider theme={Theme}>
      <AppContext.Provider value={provided}>{children}</AppContext.Provider>
    </ThemeProvider>
  );
}

type AppContextData = {
  user: any;
  login: any;
  logout: any;
  loginErrorMessage: string;
};

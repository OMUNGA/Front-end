import React, {createContext} from "react";

type AppContextData = {
    user: {}
}

export const AppContext = createContext({} as AppContextData)

export function useAuth() {
	return React.useContext(AppContext);
}

const userData: {} = {
	first_name: "Jonh",
	last_name: "Dave",
	email: "jonh20088@gmail.com",
	bio: "Sou o Jonh dave um desenvolvedor web python fullstack",
	phone: "+244947842187",
	image: "./images/user.jpg"
}


export function AppProvider({children}: any) {
	const [user, setUser] = React.useState({})

	React.useEffect(()=> {
		setUser(userData)
	}, [])

    const provided = {
		user,
	};

	return (
		<>
			<AppContext.Provider value={provided}>{children}</AppContext.Provider>
		</>
	);

}
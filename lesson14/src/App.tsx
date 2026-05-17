import { ProtectedRoute } from "@/auth/ProtectedRoute";
import { Layout } from "@/components/Layout";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import store from "./lib/store";
import { IndexPage } from "./pages/IndexPage";
import { LoginPage } from "./pages/LoginPage";
import { MemberWelcomePage } from "./pages/MemberWelcomePage";

import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen/InboxScreen";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<IndexPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route
					path="velkominn"
					element={
						<ProtectedRoute>
							<MemberWelcomePage />
						</ProtectedRoute>
					}
				/>
			</Route>
		</Routes>
	);
	return (
		<Provider store={store}>
			<InboxScreen />
		</Provider>
	);
}
export default App;

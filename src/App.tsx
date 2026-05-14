import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CryptoPage from "./components/CryptoPage.tsx";

const queryClient = new QueryClient();



export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CryptoPage />
        </QueryClientProvider>
    );
}

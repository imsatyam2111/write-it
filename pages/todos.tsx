import { MainLayout } from "../Layout";
import { TodosModule } from "../modules/Todos";

export default function Todos() {
    return (
        <MainLayout>
            <TodosModule />
        </MainLayout>
    )
};

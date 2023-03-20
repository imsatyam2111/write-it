import { MainLayout } from "../Layout";
import { HomeModule } from "../modules/Home";

export default function Home() {
  return (
    <>
      <MainLayout>
        <HomeModule />
      </MainLayout>
    </>
  );
}

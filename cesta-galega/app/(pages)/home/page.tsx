import WelcomeComponent from "@/app/components/welcome/page";

export default function Home() {
    return <>
        <div className="text-5xl text-center">Home Page</div>
        <WelcomeComponent name="Iker" appName="CestaGalega"/>
    </>;
}
import Head from "next/head";
import RegisterForm from "@/components/auth/register-form";
import LoginForm from "@/components/auth/login-form";
import {Tabs, TabsProps} from "antd";


export default function AuthPage() {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Login`,
            children: <LoginForm/>,
        },
        {
            key: '2',
            label: `Registration`,
            children: <RegisterForm/>,
        },
    ];
    
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            
            <main>
                <div className={'w-screen h-screen flex items-center justify-center'}>
                    <div className={'p-8 bg-white rounded-md'} style={{width: '100%', maxWidth: '360px', minWidth: '100px'}}>
                        <Tabs
                            defaultActiveKey="1"
                            items={items}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
import React from 'react'
import Privcy from '../pages/Privcy'
import '../../styles/privacy.css'
import Footer from '../Footer'
const Terms = () => {
    return (
        <>
            <div className="privacy-page mb-12">
                <div className="content-area">
                    <Privcy />
                    <div className="text-area">
                        <p className="py-3" className="py-3">
                            By downloading or using the web app/website, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy or modify the web app/website, any part of the web app/website, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the web app/website, and you also shouldn’t try to translate the web app/website into other languages or make derivative versions. The web app/website itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to Kalavarana.
                        </p>
                        <p className="py-3">
                            Kalavarana is committed to ensuring that the web app/website is as useful and efficient as possible. For that reason, we reserve the right to make changes to the web app/website or to charge for its services, at any time and for any reason. We will never charge you for the web app/website or its services without making it very clear to you exactly what you’re paying for.
                        </p>
                        <p className="py-3">
                            The Kalavarana web app/website stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone/device and access to the web app/website secure. We, therefore, recommend that you do not jailbreak or root your phone/device, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Kalavarana app won’t work properly or at all.
                        </p>
                        <p className="py-3">
                            The web app/website does use third-party services that declare their own Terms and Conditions.
                        </p>
                        <p className="py-3">We may employ third-party companies and individuals due to the following reasons:</p>
                        <ul className="list-decimal px-4">
                            <li>To facilitate our Service;</li>
                            <li>To provide the Service on our behalf;</li>
                            <li>To perform Service-related services; or</li>
                            <li>To assist us in analyzing how our Service is used.</li>
                        </ul>
                        <p className="py-3">
                            You should be aware that there are certain things that Kalavarana will not take responsibility for. Certain functions of the web app/website will require the web app/website to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Kalavarana cannot take responsibility for the web app/website not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.
                        </p>
                        <p className="py-3">
                            If you’re using the web app/website outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the web app/website, you’re accepting responsibility for any such charges, including roaming data charges if you use the web app/website outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the web app/website, please be aware that we assume that you have received permission from the bill payer for using the web app/website.
                        </p>
                        <p className="py-3">
                            Along the same lines, Kalavarana cannot always take responsibility for the way you use the web app/website i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Kalavarana cannot accept responsibility.
                        </p>
                        <p className="py-3">
                            With respect to Kalavarana’s responsibility for your use of the web app/website, when you’re using the web app/website, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Kalavarana accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the web app/website.
                        </p>
                        <p className="py-3">
                            At some point, we may wish to update the web app/website. The web app/website is currently available on <a href="https://www.kalavarana.com" className="text-blue-600 underline" target="_blank">https://www.kalavarana.com</a> – the requirements for the system(and for any additional systems we decide to extend the availability of the web app/website to) may change, and you’ll need to download the updates if you want to keep using the web app/website. Kalavarana does not promise that it will always update the web app/website so that it is relevant to you and/or works with the version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the web app/website, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination,
                            <br />(a) the rights and licenses granted to you in these terms will end;
                            <br />(b) you must stop using the web app/website, and (if needed) delete it from your device.
                        </p>
                        <h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Changes to This Terms and Conditions</h1>
                        <p className="py-3">
                            We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
                        </p>
                        <p className="py-3">
                            These terms and conditions are effective as of 2021-09-20
                        </p>
                        <h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Contact Us</h1>

                        <p className="py-3">
                            If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at <a href="mailto:info@kalavarana.com" className="underline">info@kalavarana.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Terms

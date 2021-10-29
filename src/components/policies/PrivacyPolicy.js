import React from 'react'
import Privcy from '../pages/Privcy'
import '../../styles/privacy.css'
import Footer from '../Footer'

const PrivacyPolicy = () => {
	return (
		<>
			<div className="privacy-page mb-12">
				<div className="content-area">
					<Privcy />
					<div className="text-area">
						<p className="text-gray-600 py-1 w-full leading-loose">Kalavarana built the Free web app/website. This SERVICE is provided by Kalavarana at no cost and is intended for use as is.</p>

						<p className="text-gray-600 py-1 w-full ">This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>

						<p className="text-gray-600 py-1 w-full">If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>

						<p className="text-gray-600 py-1 w-full">The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Restro Solution unless otherwise defined in this Privacy Policy.</p>

						<ul className="list-decimal">
							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Information Collection and Use</h1>

								<p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Email, Phone number, Location, Address, Investment amount/capacity, Business details. The information that we request will be retained by us and used as described in this privacy policy.</p>

								<p>The app does use third-party services that may collect information used to identify you.</p>

								<p>Link to the privacy policy of third party service providers used by the app</p>

								<p>   [Google Analytics for Firebase](<a href="https://firebase.google.com/policies/analytics" target="_blank" className="text-blue-600 underline">https://firebase.google.com/policies/analytics</a>)</p>
								<p>   [Firebase Crashlytics](<a href="https://firebase.google.com/support/privacy/" target="_blank" className="text-blue-600 underline">https://firebase.google.com/support/privacy/</a>)</p>
								<p>   [Flexxited by Dixit] (<a href="http://flexxited.com/" target="_blank" className="text-blue-600 underline">http://flexxited.com/</a>)</p>

							</li>

							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Log Data</h1>
								<p>
									We want to inform you that whenever you use our Service, in a case of an error in the web app/website we collect data and information (through third-party products) on your phone/browser called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
								</p>
							</li>

							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Cookies</h1>
								<p>
									Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
								</p>
								<p>
									This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
								</p>
							</li>

							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Service Providers</h1>
								<p>We may employ third-party companies and individuals due to the following reasons:</p>
								<ul className="list-decimal">
									<li>To facilitate our Service;</li>
									<li>To provide the Service on our behalf;</li>
									<li>To perform Service-related services; or</li>
									<li>To assist us in analyzing how our Service is used.</li>
								</ul>
								<p>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
							</li>

							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Security</h1>
								<p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
								</p>
							</li>

							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Links to Other Sites</h1>
								<p>
									This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
								</p>
							</li>
							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Children’s Privacy</h1>
								<p>
									These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
								</p>
							</li>


							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Changes to This Privacy Policy</h1>
								<p>
									We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
								</p>
								<p>
									This policy is effective as of 2021-09-20
								</p>
							</li>

							<li>
								<h1 className="text-lg text-primary font-bold pt-7 pb-3 w-full">Contact Us</h1>
								<p>
									If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at  <a href="mailto:info@kalavarana.com" className="underline">info@kalavarana.com</a>
								</p>
							</li>

						</ul>





					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default PrivacyPolicy

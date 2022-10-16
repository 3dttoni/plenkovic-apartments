import GA4 from "@c/GA4";

export default function AppScripts() {
  return (
    <>
      <script
        id="aos"
        async={true}
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
      ></script>
      <GA4 />
    </>
  );
}

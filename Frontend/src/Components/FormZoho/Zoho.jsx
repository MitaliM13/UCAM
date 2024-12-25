import  { useEffect } from "react";

const Zoho = () => {
  useEffect(() => {
    try {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://forms.zohopublic.in/mitalimauryakcc1/form/Register/formperma/6_wP_YIwdhxo4EaGtX8ezS1aj189_I9P3U5xcI7-hOA?zf_rszfm=1";
      iframe.style.border = "none";
      iframe.style.height = "941px";
      iframe.style.width = "90%";
      iframe.style.transition = "all 0.5s ease";
      iframe.setAttribute("aria-label", "Register");

      const container = document.getElementById(
        "zf_div_6_wP_YIwdhxo4EaGtX8ezS1aj189_I9P3U5xcI7-hOA"
      );
      container.appendChild(iframe);

      const adjustIframeHeight = (event) => {
        if (event.data && typeof event.data === "string") {
          const iframeData = event.data.split("|");
          if (iframeData.length === 2 || iframeData.length === 3) {
            const [perma, height] = iframeData;
            const newHeight = `${parseInt(height, 10) + 15}px`;
            if (iframe.src.includes("formperma") && iframe.src.includes(perma)) {
              if (iframe.style.height !== newHeight) {
                if (iframeData.length === 3) {
                  iframe.scrollIntoView();
                  setTimeout(() => {
                    iframe.style.height = newHeight;
                  }, 500);
                } else {
                  iframe.style.height = newHeight;
                }
              }
            }
          }
        }
      };

      const handleFormSuccess = (event) => {
        if (event.data && event.data === "form_submitted") {
          window.location.href = "https://crm.zoho.com/crm/org1234567/tab/Leads"; 
        }
      };

      window.addEventListener("message", adjustIframeHeight, false);
      window.addEventListener("message", handleFormSuccess, false);

      return () => {
        window.removeEventListener("message", adjustIframeHeight, false);
        window.removeEventListener("message", handleFormSuccess, true);
      };
    } catch (error) {
      console.error("Error embedding Zoho form:", error);
    }
  }, []);

  return (
    <div
      id="zf_div_6_wP_YIwdhxo4EaGtX8ezS1aj189_I9P3U5xcI7-hOA"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    ></div>
  );
};

export default Zoho;

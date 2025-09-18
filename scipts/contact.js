
function openContactModal() {
        document.getElementById("blackOverlay").style.display = "flex";
    }

function copyToClipboard(button) {
        const text = button.previousElementSibling.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
            showToast("Copied: " + text);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }

function showToast(message) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

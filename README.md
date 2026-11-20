# Google-Accounts-Stealer
A Google Apps Script-based phishing simulation framework for security awareness training and Red Team exercises. Replicates target UIs to test organizational detection and reporting capabilities.

# GAS-PhishSim

A Google Apps Script (GAS) framework for deploying isolated phishing simulation environments. Designed for Red Team operations, security awareness training, and UI-spoofing detection tests.

## Architecture

Built entirely on Google Apps Script, this framework leverages Google's trusted domain infrastructure to test email gateway filters and user reporting behavior without requiring external VPS hosting.

- **Frontend (`Index.html`):** Replicates target login interfaces. Designed to be mobile-responsive and visually indistinguishable from the target application to accurately gauge user susceptibility.
- **Backend (`Code.gs`):** Handles form submissions, logs the interaction (timestamp, email, password length/hash), and simulates a failed login attempt to encourage a second submission (testing repeat behavior).

## Disclaimer

> **This tool is strictly for authorized security testing and educational purposes.**
> 
> The author is not responsible for any misuse or damage caused by this program. Do not use this against targets without explicit, written permission. The default configuration deliberately omits functional credential exfiltration endpoints. Users are responsible for ensuring their use of this tool complies with all applicable local, state, and federal laws.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/GAS-PhishSim.git

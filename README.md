# Anti-Links Discord Bot

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A Discord bot that removes messages containing links in specified channels, except for whitelisted channels and users with specific roles.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Community](#community)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Discord bot is designed to help moderate links posted in Discord channels. It automatically removes messages that contain links unless they are posted in whitelisted channels or by users with specific roles. By using this bot, you can maintain a cleaner chat environment while still allowing links in designated areas.

Initially i created this bot, because i got tired from people posting illegal links and other stuff in general chat, while there is support chat, therefore this bot was created.

It was created for FiveM Security Community
[![Discord](https://img.shields.io/discord/727712726880747660?color=7289DA&label=Discord&logo=discord&logoColor=white)](https://discord.gg/r6UzgNYAdw)

## Features

- Automatic removal of messages containing links
- Whitelisting specific channels to allow links
- Ignoring users with specific roles to bypass link removal

## Installation

To use the Anti-Links Discord Bot, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/inhostllc/Anti-Links-Discord-Bot.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file in the root directory of the project and adding the following:

   ```plaintext
   DISCORD_TOKEN=your_discord_bot_token
   WEBHOOK_URL=your_webhook_url_for_logs
   ```

4. Configure the bot according to your preferences (see [Configuration](#configuration) section below).

5. Run the bot:

   ```bash
   npm start
   ```

## Usage

Once the bot is running and added to your Discord server, it will automatically monitor messages in the specified channels and remove any messages containing links, except for whitelisted channels and users with specific roles.

## Configuration

You can configure the behavior of the bot by modifying the following variables in the `.env` file:

- `DISCORD_TOKEN`: Your Discord bot token.
- `WEBHOOK_URL`: The webhook URL where log messages will be sent.

Additionally, you can customize the whitelisted channels and ignored roles directly in the `index.js` file.

## Community

Join our Discord community for support, feedback, and collaboration:

[![Discord](https://img.shields.io/discord/792340562493702174?color=7289DA&label=Discord&logo=discord&logoColor=white)](https://discord.gg/rXs6Kbmctq)

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

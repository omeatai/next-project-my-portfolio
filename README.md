# Next.js 13 Project - My Modern Portfolio App

## Introduction

This is a modern portfolio web application built with Next.js by Ifeanyi Omeata.

## Development Tools/Stack

- React [https://react.dev/](https://react.dev/)
- React Headless UI [https://headlessui.com/](https://headlessui.com/)
- NextJS 13 [https://nextjs.org/docs](https://nextjs.org/docs)
- TailwindCSS [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
- Hero Icons [https://heroicons.com/](https://heroicons.com/)
- Prisma ORM [https://www.prisma.io/](https://www.prisma.io/)
- PlanetScale MySQL Platform [https://planetscale.com/](https://planetscale.com/)
- Sanity [https://www.sanity.io/](https://www.sanity.io/)
- Vercel [https://vercel.com/](https://vercel.com/)

## Project Steps (Tutorial)

<details>
<summary>1. Create Next App</summary>

# Create Next App

### [https://github.com/omeatai/next-project-my-portfolio/commit/3fe670fc72b4d67bd71568153111beb24a28a5fd](https://github.com/omeatai/next-project-my-portfolio/commit/3fe670fc72b4d67bd71568153111beb24a28a5fd)

```x
npx create-next-app@latest .
```

```x
npx create-next-app@13.4.12 . && npm i next@13
```

```x
npx create-next-app@13 <app-name> && cd <app-name> && npm i next@13
```

<img width="1270" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/424133bb-cd58-4a68-a982-0c92873da242">

<img width="654" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/971106bf-bca8-46d3-9a11-e5728c0a7fcd">

# #End</details>

<details>
<summary>2. Install Dependencies </summary>

# Install Dependencies

### [https://github.com/omeatai/next-project-my-portfolio/commit/fe3adb5c290d2200f53d4a0cf42646da86d18410](https://github.com/omeatai/next-project-my-portfolio/commit/fe3adb5c290d2200f53d4a0cf42646da86d18410)

# Install Prisma, Tailwindcss Typography and Forms

```x
npm i -D prisma @tailwindcss/typography @tailwindcss/forms
```

# Install NextJS Themes, React Headless UI, Prisma Client, Next Sanity

```x
npm i next-themes @headlessui/react @prisma/client next-sanity
```

# #End</details>

<details>
<summary>3. Set Tailwindcss Plugins</summary>

# Set Tailwindcss Plugins

### [https://github.com/omeatai/next-project-my-portfolio/commit/e7a8547e47271d0afb127be699d444a6d02be2a8](https://github.com/omeatai/next-project-my-portfolio/commit/e7a8547e47271d0afb127be699d444a6d02be2a8)

<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/1310751b-a9e8-4718-b491-ccfb6f237573">

# #End</details>

<details>
<summary>4. Remove default style from globals</summary>

# Remove default style from globals

### [https://github.com/omeatai/next-project-my-portfolio/commit/8b87a614b45b2173060d34d5cbc5761ee58c68f7](https://github.com/omeatai/next-project-my-portfolio/commit/8b87a614b45b2173060d34d5cbc5761ee58c68f7)

<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/e0681075-78cd-4f83-aef4-ca41aaf03014">

# #End</details>

<details>
<summary>5. Setup Home Layout and Page</summary>

# Setup Home Layout and Page

### [https://github.com/omeatai/next-project-my-portfolio/commit/88fdd8edeebf42b84af0e92bc80b2e7d8591e5fc](https://github.com/omeatai/next-project-my-portfolio/commit/88fdd8edeebf42b84af0e92bc80b2e7d8591e5fc)

### [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/e00359b6-67ca-4895-874e-b689d58b38df">
<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/0b198d51-d98f-4f35-bfef-35f8c3da4cc4">
<img width="1268" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/e7302904-3909-4842-8150-abd9cd8316f4">

# #End</details>

<details>
<summary>6. Create Nav Contents </summary>

# Create Nav Contents

### [https://github.com/omeatai/next-project-my-portfolio/commit/4f6667f10ef540fd5612f2e548d63f5e35110e4e](https://github.com/omeatai/next-project-my-portfolio/commit/4f6667f10ef540fd5612f2e548d63f5e35110e4e)

### [https://headlessui.com/react/disclosure](https://headlessui.com/react/disclosure)

### [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

<img width="1129" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/a88cd0d6-fce9-4443-9f6f-9a9c36bc64af">
<img width="1129" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/519c309d-be36-45c3-80d6-116cc3c5e864">
<img width="1129" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/6da77f85-e6bc-4bbb-ba4b-12e42d5df6ed">
<img width="1241" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/d3d62e86-0e60-49b4-a66d-ba8173fa647a">

# #End</details>

<details>
<summary>7. Create Nav Button </summary>

# Create Nav Button

### [https://github.com/omeatai/next-project-my-portfolio/commit/075bde05bde6de022c48fe9dbace355857fbbf29](https://github.com/omeatai/next-project-my-portfolio/commit/075bde05bde6de022c48fe9dbace355857fbbf29)

### [https://heroicons.com/](https://heroicons.com/)

### [https://headlessui.com/react/disclosure](https://headlessui.com/react/disclosure)

### [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

<img width="1184" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/f020d70e-6e77-4bf6-aee8-50f689fa5a27">
<img width="1184" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/a6f8cc89-2758-4cdb-b4c2-c9dbb9fb5e4a">

<img width="1125" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/43c3e49a-61ee-455f-bfba-029c64e941bc">
<img width="1203" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/5f391bfd-93b1-4bc5-8f19-8e772cc99541">

# #End</details>

<details>
<summary>8. Create Nav Open Panel </summary>

# Create Nav Open Panel

### [https://github.com/omeatai/next-project-my-portfolio/commit/642dfb95a6257ce2c7eeb42d4513296dcb3b8da7](https://github.com/omeatai/next-project-my-portfolio/commit/642dfb95a6257ce2c7eeb42d4513296dcb3b8da7)

<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/b9c9836b-6239-4ebc-9ed2-64009118021a">
<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/da1cb7e8-c5d0-4507-b7d5-f01dcd09599e">
<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/94c90e11-9965-459a-958e-bf4d41e9817d">
<img width="1247" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/8e8568fe-7b4f-4afe-a844-ead3c10421e4">
<img width="1247" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/09ab796a-1d03-4d7b-a58a-ea9aba148262">
<img width="1247" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/c6b6c1a2-bfd6-47fa-a3fc-854ad5715842">

# #End</details>

<details>
<summary>9. Create Dark Mode Switch </summary>

# Create Dark Mode Switch

### [https://github.com/omeatai/next-project-my-portfolio/commit/b55237499ebb7a9d3de84453322d44ce7b95a7a3](https://github.com/omeatai/next-project-my-portfolio/commit/b55237499ebb7a9d3de84453322d44ce7b95a7a3)

<img width="1239" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/54fb8f79-47ea-4ec2-bfd0-b606543125ab">
<img width="1127" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/f6678b42-56e2-41e8-a10c-fe7a301e9246">
<img width="1127" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/2cf50318-09e3-464f-b4fe-bd65c613898d">
<img width="1127" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/86bd0adc-1131-41ae-aff2-020cf8c13632">
<img width="1127" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/60a0b74a-007e-4b30-9079-6741437498f0">
<img width="1127" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/7cca6543-e5f4-4cfa-8afa-99ef4eeffed2">
<img width="1239" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/d6c4f884-867d-41e6-8327-bc459c6389b3">
<img width="1239" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/cc19a34c-c429-4464-b3ad-ab171dbba25f">
<img width="1239" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/2a5a58cc-8e03-4f1d-8a25-97a70e233f4d">
<img width="1239" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/05dd4381-8cc5-49f6-a657-3b1f1077d2c3">

# #End</details>

<details>
<summary>10. Customise Profile on Home Page </summary>

# Customise Profile on Home Page

### [https://github.com/omeatai/next-project-my-portfolio/commit/ac47c962a9e5cf452ad195c981214498b281c840](https://github.com/omeatai/next-project-my-portfolio/commit/ac47c962a9e5cf452ad195c981214498b281c840)

<img width="1123" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/b5439484-eb57-47cb-9af4-d28dada939af">
<img width="1408" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/ac7c6c94-c5b1-4f2d-a5f7-1609c75f9478">
<img width="1227" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/7af0fd3c-0222-48e9-a6a1-0fff34490e20">
<img width="1235" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/6fc0f56f-ae03-41b4-ac82-8594416c5040">

# #End</details>

<details>
<summary>11. Guestbook - Configure Planetscale Database </summary>

# Guestbook - Configure Planetscale Database

### [https://github.com/omeatai/next-project-my-portfolio/commit/609b64a9e3a137cb8a117ef2fda27a10a435e0ce](https://github.com/omeatai/next-project-my-portfolio/commit/609b64a9e3a137cb8a117ef2fda27a10a435e0ce)

### [https://app.planetscale.com/](https://app.planetscale.com/)

### [https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices)

### Initialise Prisma

```x
npx prisma init
```

### Push Prisma Schema Model into Database

```x
npx prisma db push
```

<img width="1269" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/edd5382e-4de2-4bdf-ba5b-0604c26ae623">
<img width="1269" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/9541f27f-df36-4b88-a1f3-e3f2ac83e90c">
<img width="1269" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/11a37387-8f7b-46fb-885c-63099e5803d9">
<img width="1269" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/544c842b-acc3-4530-9710-4cd9bf67cf40">
<img width="1269" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/df7ba484-e35d-424f-a70b-770b56f507e7">
<img width="1269" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/3a27ece7-5cd1-48a0-b794-1ca3953dcfca">
<img width="1269" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/5d9a487e-3a85-4978-84b1-50d097ec58b8">
<img width="1269" alt="Screenshot 2023-11-09 at 5 00 27 PM" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/ad1f897e-c945-41e9-89c8-db2640eeedab">
<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/34c56e61-c134-4150-bee4-53bf5d7c4063">
<img width="1269" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/7144612e-9316-443d-a008-fd8546360ff0">
<img width="1124" alt="Screenshot 2023-11-09 at 5 16 28 PM" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/9a40a069-fcfa-4f01-8a45-26d210b9ec79">
<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/d63eb75c-a28c-47ee-bf23-5ec23ef2d117">
<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/00568c24-2792-4296-979a-cf3cafebf001">

# #End</details>

<details>
<summary>12. Guestbook - Create Guestbook Component </summary>

# Guestbook - Create Guestbook Component

### [https://github.com/omeatai/next-project-my-portfolio/commit/d7e31fe7964aad693d1d2021c220e145a832adf7](https://github.com/omeatai/next-project-my-portfolio/commit/d7e31fe7964aad693d1d2021c220e145a832adf7)

# View Database in Prisma Studio

```x
npx prisma studio
```

<img width="1162" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/7c403c71-ff9e-4ba2-81b2-1af371adec85">
<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/8a8c9e28-58ed-472f-818b-140d4aae3a6b">
<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/155a6322-8e8a-47d3-97ac-88bcbed00b41">
<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/1602099a-35c6-4b16-bbfa-13a9ee4ea45d">
<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/2a9a46ea-9902-4cb3-ba7b-9f0ec881d83d">
<img width="1122" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/6e4df1f2-24a8-470b-9caf-d219ab309030">
<img width="1162" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/6826d193-ef50-47dd-8ec5-43ae8c9a1d76">
<img width="1162" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/1b0edac3-dbed-4bfd-9df8-23fcadd56318">
<img width="1162" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/cbcd5fb8-0480-4a6f-b4ee-a34afcb5d588">
<img width="1162" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/9ca81267-2b69-42dd-9de2-fe53fb6db855">

# #End</details>

<details>
<summary>13. Projects - Create Page Component </summary>

# Projects - Create Page Component

### [https://github.com/omeatai/next-project-my-portfolio/commit/b73a33fdfb5a13d4992944b90e6ab63970774499](https://github.com/omeatai/next-project-my-portfolio/commit/b73a33fdfb5a13d4992944b90e6ab63970774499)

<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/bc51f65d-d9e0-4218-9156-20b361242ca7">
<img width="1160" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/93cede4a-2e64-4b8b-9c9f-ddfec0374467">

# #End</details>

<details>
<summary>14. Projects - Configure Sanity Headless CMS </summary>

# Projects - Configure Sanity Headless CMS

### [https://github.com/omeatai/next-project-my-portfolio/commit/9fa6a96c99050a214f2e610c81f38b2152839e2f](https://github.com/omeatai/next-project-my-portfolio/commit/9fa6a96c99050a214f2e610c81f38b2152839e2f)

### [https://www.sanity.io/docs/create-a-sanity-project](https://www.sanity.io/docs/create-a-sanity-project)

### [https://www.sanity.io/manage/personal/projects](https://www.sanity.io/manage/personal/projects)

### Install Sanity Studio and Create Project

```x
npm create sanity@latest -- --template clean --create-project "sanity-portfolio" --dataset production
```

### Run Sanity Studio

```x
cd sanity-portfolio
npm run dev
```

<img width="840" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/fbc611f0-c530-434a-b7e7-2e27f47e7d0b">

<img width="1255" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/61a37351-eb43-40b9-83fc-afd3ee4a3377">

<img width="1255" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/040607f2-7169-46b7-b89f-4674d1a4671b">

<img width="1255" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/be09f3bf-b3e1-4378-8f10-2f4ce356d484">

<img width="1255" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/2eea7f33-e895-4af0-a969-95aadc973202">

<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/393c3b8e-9400-4eb8-8c1a-60397ae1f81f">

<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/3f0f692e-6373-49e9-b3f7-6d087d7536c7">

<img width="1254" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/1fa30fde-133c-45dd-bbb1-7cc159cd73de">

<img width="1254" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/ad585d8a-ce30-427c-aa9f-7db10f92e3ca">

# #End</details>

<details>
<summary>15. Projects - Create Sanity Contents </summary>

# Projects - Create Sanity Contents

### [https://github.com/omeatai/next-project-my-portfolio/commit/20bbb88dd00b1423806974a2c3d6de59b7e08e63](https://github.com/omeatai/next-project-my-portfolio/commit/20bbb88dd00b1423806974a2c3d6de59b7e08e63)

# Sanity Query to Fetch Data

```x
*[
  _type == "project"
] {
  title,
    overview,
    link,
    _id,
    "imageUrl": image.asset->url
}
```

# Install Next Sanity Client

```x
npm i next-sanity
```

<img width="651" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/aae40442-31bd-4c34-ab14-6f111c1eb239">
<img width="1310" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/d522f850-d020-4c03-8ef4-a284ef89d89f">
<img width="1309" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/b17413e5-d23f-4faa-b560-4359569db3e4">
<img width="1309" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/9c6ca46a-e0d3-4dbb-a1c6-2383a4eaead6">
<img width="1309" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/30f8e9af-1c31-437b-a078-42e3cb03ef9b">
<img width="1309" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/f177b6af-c605-4e7d-8f67-5a613369a702">
<img width="1309" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/fc825b79-bd4b-4a65-b394-7171967a58af">
<img width="1309" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/2fde40d0-fcf5-4a84-b0c1-606136407622">

# #End</details>

<details>
<summary>16. Projects - Complete Projects Page Component</summary>

# Projects - Complete Projects Page Component

### [https://github.com/omeatai/next-project-my-portfolio/commit/080d14c8e1c029effd2f60391ab6a12f98c8b7a8](https://github.com/omeatai/next-project-my-portfolio/commit/080d14c8e1c029effd2f60391ab6a12f98c8b7a8)

<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/296a303f-22a3-4c8d-93be-9169b2a04a02">
<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/214c1e28-eea4-4c47-b892-d14d225cef61">
<img width="1307" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/0bcee48c-723e-4d8f-8fe2-42f71aefd7ee">
<img width="1307" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/4eb0a96f-8285-4678-9652-3f914c346e83">

# #End</details>

<details>
<summary>17. Projects - Add GithubLink and DemoLink Fields to Sanity </summary>

# Projects - Add GithubLink and DemoLink Fields to Sanity

### [https://github.com/omeatai/next-project-my-portfolio/commit/0ce9252fdd28211699f8bdb5a987b38c2206105c](https://github.com/omeatai/next-project-my-portfolio/commit/0ce9252fdd28211699f8bdb5a987b38c2206105c)

<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/b53893c9-e2c0-49d2-8d74-25a7dd6da501">
<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/adeac529-4de7-4020-8d2d-d6b5220cc922">
<img width="1307" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/18f576bb-2f36-4108-878e-0c9951bd3963">
<img width="1307" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/48371cd9-789c-418a-aff7-43464b4d621d">
<img width="1307" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/e12a0b2e-f675-49b6-a056-2419103b11ba">
<img width="1307" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/e88e85ed-2a41-4d77-a050-272c70930a77">
<img width="1307" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/d3a25781-6241-40f0-9a2c-5acf2b5389f0">

# #End</details>

<details>
<summary>18. Guestbook - Add Username and Entry Date Fields to Prisma Guestbook DB  </summary>

# Guestbook - Add Username and Entry Date Fields to Prisma Guestbook DB

### [https://github.com/omeatai/next-project-my-portfolio/commit/3a721351e61c995851f3e15ff697426139317e40](https://github.com/omeatai/next-project-my-portfolio/commit/3a721351e61c995851f3e15ff697426139317e40)

<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/8e5afabf-5bdb-46cd-af9a-350e35572be6">
<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/87285f23-587d-43fb-9566-afa61dcd644b">
<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/96a160f5-c955-4e8a-a10d-63f166e76ff9">
<img width="1126" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/30e17034-eb24-4139-841f-f116bb6108a3">
<img width="1247" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/3c2fa48f-58a5-4710-b2d4-d6d30c494ac4">

# #End</details>

<details>
<summary>19. Deploy Project to Vercel </summary>

### [https://github.com/omeatai/next-project-my-portfolio/commit/3f937d2fa59bae608dd3c96922ff3a3e61623133](https://github.com/omeatai/next-project-my-portfolio/commit/3f937d2fa59bae608dd3c96922ff3a3e61623133)

### [https://github.com/omeatai/next-project-my-portfolio/commit/fba27c77b5cb7241744eadfe8446c38600c29d32](https://github.com/omeatai/next-project-my-portfolio/commit/fba27c77b5cb7241744eadfe8446c38600c29d32)

### [https://github.com/omeatai/next-project-my-portfolio/commit/3f31b8db09efcc814e789b3d2a193cd62024df42](https://github.com/omeatai/next-project-my-portfolio/commit/3f31b8db09efcc814e789b3d2a193cd62024df42)

<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/f652bae1-f0ec-42a7-8168-4902926e3645">
<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/bde99e33-4dd2-4004-bc38-9fa09afbef72">
<img width="1124" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/9ecdb80b-b465-4f27-8843-471efe3763da">

<img width="1247" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/593fc4c0-4c14-4b27-a934-10bc0789a320">
<img width="1247" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/c06abf6c-a3fe-4717-bd29-210a3174564c">
<img width="1247" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/ba64db03-8283-48ef-b486-f32822d28977">
<img width="1247" alt="image" src="https://github.com/omeatai/next-project-my-portfolio/assets/32337103/986cdf65-2486-44e3-96d3-a708605b9015">


# Deploy Project to Vercel

# #End</details>

# Kids Qur'an

An app that helps children memorise surahs, from Al-Fatiha and the short surahs to Al-Kahf and Ya-Sin, live at https://kids-quran.ummahapps.ai/

This file tells Claude (and anyone else working on the site) how the project works. It is part of the Ummah Apps family, listed at https://ummahapps.ai/.

## How this site works
- A plain static site: HTML, CSS and JavaScript with no build step and no server code. Most of the app is in `index.html`.
- It is hosted on GitHub Pages. Pushing to `main` puts it live within a minute or two. Keep the `CNAME` file, or the custom domain stops working.
- Nothing is uploaded. All progress is saved in the browser on the user's own device (localStorage, cookies or IndexedDB). There are no accounts, analytics or paid services.
- `README.md` describes every feature and the storage keys. Read it before changing anything, and update it in the same change when a feature changes.

## Saved progress is precious
Learners may have months of progress saved on their devices. Never rename or remove a storage key, cookie or data field without code that moves the old data across. Old saved data must still load. When a data shape changes, test with data saved by the old version.

## Writing style
- Use plain, simple English everywhere: on screen, in the README and in commit messages. Many users are children, parents, or people whose first language isn't English.
- Commit messages are one short sentence saying what changed for the user, for example "Go to the next question by itself 2 seconds after a right answer".
- Keep Arabic fully vowelled (harakat) unless the app has a setting to hide the vowels.

## Religious content
- Never make up or paraphrase Qur'an text, hadith wording or duas. Use only wording that is already in the app or that the owner provides, and keep the source (for example the Sahih al-Bukhari or Sahih Muslim number on sunnah.com).
- Follow the Prophet's name with "peace be upon him" (or ﷺ).
- If unsure whether something is religiously correct, ask the owner instead of guessing.

## Search engines and AI tools (SEO and GEO)
When a feature, count or description changes, also update what describes it: the meta description, the JSON-LD and the FAQ in `index.html`, `llms.txt`, and the date in `sitemap.xml`.

## Before saying a change is done
- Run the site locally and check the change in the browser preview, including on a phone-sized screen.
- Check the browser console for errors.
- Ask the owner before committing or pushing, because pushing makes it live for everyone.

## Kids Qur'an
- The recitation is by Saad al-Ghamdi, from everyayah.com. Keep the credit. Audio is one MP3 per ayah in `audio/<surah>/1.mp3`, `2.mp3` and so on (see `audio/README.txt`).
- Several people can use one device, each with their own progress, and grown-ups can set homework. Keep each person's progress separate.
- The Arabic text of the ayahs must match the Mushaf exactly. Never type or "fix" it from memory. Copy it from a trusted source and have the owner check it.
- Run locally with `node serve.js`, then open http://localhost:8123

# The Shortlist — Affiliate Product Catalog

A static, no-database affiliate storefront. Product data lives in **`products.xlsx`**;
the site reads it directly in the browser using SheetJS. There's no server, no API, no database.

## Files

| File | Purpose |
|---|---|
| `index.html` | The public page visitors see — product cards with photo, description, price, and a "View product" button that opens your affiliate link. |
| `admin.html` | The "admin portal" — a spreadsheet-style table in the browser for adding, editing, and deleting products. Exports an updated `products.xlsx` you download. |
| `products.xlsx` | The data source. Has two tabs: `Products` (the real data) and `How To Edit` (a legend explaining each column). |

## How it works (and its one real limitation)

GitHub Pages only serves static files — it can't run a server or write files on its own.
So the flow is:

1. `index.html` fetches `products.xlsx` from the same folder and renders it. This part is fully automatic — no editing of HTML required, ever.
2. To change what's listed, you edit the data and **replace the file in the repo**. You have two ways to do that:
   - **Directly in Excel/Google Sheets/LibreOffice**: open `products.xlsx`, edit rows, save, then upload it to your GitHub repo (overwrite `products.xlsx`) and commit.
   - **Using `admin.html`**: open it locally or via your GitHub Pages URL (e.g. `https://yourname.github.io/yourrepo/admin.html`), edit the table in the browser, click **Export products.xlsx**, then upload that downloaded file to your repo, replacing the old one.

Either way, nothing is written automatically — you (the admin) push the updated file. This is
the trade-off for "no database, no backend": edits require one manual upload/commit step.
If down the road you want the admin page to publish changes on its own, that requires either
a backend (e.g. a small serverless function) or the GitHub API with an access token — both are
outside "no database, static GitHub Pages," so they're intentionally left out here.

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `affiliate-shortlist`).
2. Upload `index.html`, `admin.html`, and `products.xlsx` to the repo root (or a `/docs` folder — your choice).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and the folder you used (`/root` or `/docs`), then **Save**.
4. Wait a minute, then visit `https://<your-username>.github.io/<repo-name>/`.
5. Visit `.../admin.html` any time you want to edit the catalog in a spreadsheet-like UI.

## Editing `products.xlsx` columns

| Column | Meaning |
|---|---|
| `id` | Unique number per row. |
| `name` | Product name shown on the card. |
| `category` | Powers the filter chips on the site. |
| `price` | Number only, e.g. `29.99`. |
| `currency` | 3-letter code: `USD`, `EUR`, `INR`, etc. |
| `description` | 1–2 sentences shown on the card. |
| `image_url` | Direct link to a product photo. |
| `affiliate_link` | Your tracked affiliate URL — this is what "View product" opens. |
| `featured` | `yes` to show it in the Featured strip at the top, otherwise `no`. |
| `tags` | Comma-separated keywords used by the search box. |

## Notes

- The affiliate disclosure banner on `index.html` is a placeholder — adjust the wording to match your program's/region's disclosure requirements.
- Buy buttons use `rel="nofollow sponsored noopener"`, which is what Google/FTC-style best practice expects for affiliate links.
- Everything runs client-side, so `products.xlsx` (and thus your affiliate links) is publicly viewable/downloadable, same as any static site's assets.

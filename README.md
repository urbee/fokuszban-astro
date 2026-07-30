# Projektmódosítási útmutató

Ez az útmutató abban segít, hogy egy későbbi módosításnál gyorsan végig tudd
vinni a változtatást Cursortól az éles `fokuszban.com` oldalig.

## Röviden: a teljes folyamat

1. Módosítsd az oldalt Cursorban.
2. Ellenőrizd helyben.
3. Commitold és pushold a változtatást GitHubra.
4. Nyisd meg Netlify-ban a friss Deploy Preview-t, és ellenőrizd az oldalt.
5. Ha minden rendben van, publikáld az ellenőrzött deployt az éles oldalra.

## 1. Módosítás Cursorban

- Nyisd meg a projektet Cursorban.
- Kérd meg a Cursort a szöveg, kép vagy elrendezés módosítására.
- Új képeket a `public/images` mappába érdemes tenni.
- Az oldalakat a `src/pages` mappában találod. Például a kezdőlap:
  `src/pages/index.astro`.

## 2. Helyi ellenőrzés

A Cursor termináljában, a projekt mappájában futtasd:

```powershell
npm run dev
```

Ez elindít egy helyi előnézetet; a terminál kiírja a megnyitható címet
(általában `http://localhost:4321`). Nézd át itt a módosítást asztali és
mobil nézetben is.

Egyszeri technikai ellenőrzéshez futtatható:

```powershell
npm run build
```

Ha a parancs `Complete!` üzenettel fejeződik be, a statikus oldal lefordult
hiba nélkül.

## 3. Commit és Push GitHubra

Ellenőrizd, melyik Git branchen dolgozol. Cursorban ezt az alsó állapotsorban
is látod, vagy terminálban:

```powershell
git branch --show-current
git status
```

A projekt jelenleg a `feature/hero-tuning` branchen van, amelynek távoli párja
az `origin/feature/hero-tuning` GitHubon.

Ha rendben vannak a változások:

```powershell
git add .
git commit -m "Rövid leírás a módosításról"
git push
```

A **Commit** a változásokat a saját gépeden rögzíti. A **Push** ezután feltölti
őket GitHubra, az éppen kiválasztott branch távoli párjára. Ebben a projektben
ez jelenleg a `feature/hero-tuning` branch.

Mielőtt pusholsz, mindig ellenőrizd a branch nevét. Így nem kerülhet a
változtatás véletlenül egy másik munkafolyamatba.

## 4. Netlify Deploy Preview

A Git feature branch és a Netlify Deploy Preview nem ugyanaz:

- A **feature branch** egy GitHub branch, amelyen a módosításokat gyűjtöd.
- A **Deploy Preview** ennek a branchnek (pontosabban a hozzá tartozó pull
  requestnek) a Netlify által elkészített, megnyitható webes előnézete.

Push után Netlify elkészíti vagy frissíti a Deploy Preview-t. A Netlify
felületén nyisd meg a legfrissebb, sikeres deployt, majd az **Open deploy
preview** gombbal ellenőrizd az oldalt.

Nézd meg különösen:

- a módosított szöveget és képeket;
- az összes új vagy módosított linket;
- a mobilos megjelenést;
- hogy az előnézetben nincs-e hibaoldal vagy hiányzó kép.

## 5. Éles publikálás

Ha a Deploy Preview rendben van, a Netlify-ban ezt a sikeres deployt kell az
éles `fokuszban.com` oldalra publikálni.

Jelenleg az automatikus publikálás zárolt (`Auto Publishing Locked`). Ezért a
Netlify felületén előbb az **Unlock to start auto publishing** lehetőséget kell
használni, majd a jóváhagyott deployt kell publikálni. A sikeres build vagy a
GitHubra történő push önmagában ebben a beállításban még nem módosítja az éles
oldalt.

Az élesítés után nyisd meg a `https://fokuszban.com` címet inkognitóablakban
is, így biztosan nem egy böngészőben tárolt régi változatot látsz.

## Kell-e minden változáshoz új feature branch?

Nem feltétlenül. Ennél az egyszerű, statikus oldalnál maradhatsz a jelenlegi
`feature/hero-tuning` branchen, ha csak te dolgozol rajta és a korábbi
változtatásai már élesben vannak.

Új branch akkor hasznos, ha egy nagyobb, külön ellenőrizendő módosításon
dolgozol, vagy ha egyszerre több eltérő változtatást szeretnél biztonságosan
szétválasztani. Például:

```powershell
git switch master
git pull
git switch -c feature/rovid-leiras
```

## Ha valami nem működik

- **A build hibával leáll:** másold be a Cursor chatbe a hibaüzenetet, és kérd
  a javítását.
- **A Deploy Preview nem frissül:** ellenőrizd, hogy valóban pusholtál-e, és
  hogy a megfelelő branch van-e kiválasztva. A Netlify deploylistában nézd meg,
  hogy a legfrissebb build sikeres-e.
- **Nem jó változatot látsz:** először a Deploy Preview linkjét ellenőrizd,
  majd böngészőfrissítés vagy inkognitóablak után az éles URL-t is.
- **Nem vagy biztos a publikálásban:** ne oldd fel az automatikus publikálást,
  hanem előbb ellenőrizd a Deploy Preview-t vagy kérj segítséget Cursorban.

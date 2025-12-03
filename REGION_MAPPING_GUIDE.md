# Region Mapping Guide

## How the Map Works

The interactive map detects clicks on grey regions (RGB: 199, 200, 202) and matches them to contact information based on their ID or parent group ID in the SVG file.

## Region Name Matching

The system matches SVG element IDs to region names in the `contactData` object. The matching is case-insensitive and ignores spaces.

### Current Region Mappings:

| Region Key in contactData | SVG Layer/Group Name Expected | Company |
|---------------------------|-------------------------------|---------|
| `Canada` | canada, Canada | Excite Automation & Controls |
| `North Dakota` | northdakota, NorthDakota | Primec Controls |
| `Montana` | montana, Montana | Primec Controls |
| `Western Wyoming` | westernwyoming, WesternWyoming | Wyoming Service & Supply |
| `Northeast USA` | northeastusa, NortheastUSA | Alleghany |
| `California` | california, California | Pneumatic Controls |
| `Utah` | utah, Utah | Sivalls |
| `Colorado` | colorado, Colorado | Western Sky |
| `Wyoming` | wyoming, Wyoming | Western Sky |
| `Oklahoma` | oklahoma, Oklahoma | Spindletop Energy Products |
| `Texas Panhandle` | texaspanhandle, TexasPanhandle | Spindletop Energy Products |
| `North Texas` | northtexas, NorthTexas | Bob Davis Sales |
| `East Texas` | easttexas, EastTexas | Bob Davis Sales |
| `Shreveport` | shreveport, Shreveport | Bob Davis Sales |
| `New Iberia` | newiberia, NewIberia | Spindletop Energy Products |
| `Southern USA` | southernusa, SouthernUSA | Quality Control Products |
| `Houston` | houston, Houston | Spindletop Energy Products |
| `West Texas` | westtexas, WestTexas | Strategic Energy Products |
| `South Texas` | southtexas, SouthTexas | Strategic Energy Products |
| `Mexico` | mexico, Mexico | Global Engine Controls |
| `South America` | southamerica, SouthAmerica | Global Engine Controls |

## How to Update the SVG

1. **In your SVG editor (Illustrator, Inkscape, etc.)**:
   - Group the regions that should be clickable together
   - Name each group using one of the region names above (or add new ones)
   - Ensure grouped regions have the thick dark grey border color: `#C7C8CA` or `rgb(199, 200, 202)`

2. **Example SVG structure**:
```xml
<g id="Canada">
  <path fill="#C7C8CA" d="..."/>
  <path fill="#C7C8CA" d="..."/>
</g>
```

## Adding New Regions

To add a new region:

1. **In `js/app.js`**, add a new entry to the `contactData` object:

```javascript
'New Region Name': {
  company: 'Company Name',
  logo: 'img/logos/companylogo.png',
  contacts: [{
    area: 'Area description',
    phone: '123-456-7890',
    email: 'contact@company.com',
    address: 'Full address'
  }]
}
```

2. **In your SVG file**, ensure the layer/group has an ID that matches (case-insensitive, no spaces):
   - `New Region Name` → SVG ID can be: `newregionname`, `NewRegionName`, `new-region-name`, etc.

3. **Add the logo file** to `img/logos/` directory

## Multiple Contacts for One Region

For regions with multiple contact points (like Global Engine Controls), use an array:

```javascript
'Region Name': {
  company: 'Company Name',
  logo: 'img/logos/logo.png',
  contacts: [
    {
      area: 'Area 1',
      phone: '111-111-1111',
      email: 'contact1@company.com',
      address: 'Address 1'
    },
    {
      area: 'Area 2',
      phone: '222-222-2222',
      email: 'contact2@company.com',
      address: 'Address 2'
    }
  ]
}
```

## Troubleshooting

If a region doesn't show a popup when clicked:

1. **Check the browser console** for warnings like "No contact data for region: X"
2. **Verify the SVG element ID** matches a key in `contactData`
3. **Ensure the region color** is the target grey: `rgb(199, 200, 202)`
4. **Check parent groups** - the script looks up the parent tree for matching IDs

## Technical Note

The `findRegionName()` function in `app.js` handles the matching logic. It:
1. Checks the clicked element's ID
2. If no match, traverses up the parent tree
3. Compares IDs (case-insensitive, without spaces) to contactData keys

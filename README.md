# Tech Bozeman

Tech Bozeman website, covering the tech community in Bozeman, Montana.

Built with [Hugo](https://gohugo.io/), a static site generator. It uses the
[hyalite](https://github.com/techbozeman/hyalite) hugo theme.

## Contributing

There are 3 methods for contributing:
1. Fork the repository and create a pull request with a summary of the changes :)
2. Or [open an issue here](https://github.com/techbozeman/techbozeman/issues) and document the requested changes
3. Or if you are unfamilar with GitHub, submit a request from the [website's contact page](https://www.techbozeman.com/contact)

Submissions to add or update listings, general improvements to the website, and ideas are much appreciated!

### Getting Started

1. Install Hugo: https://gohugo.io/getting-started/installing/
2. Fork repo, clone
3. run `hugo server` to access site at http://localhost:1313
4. See Hugo's docs: https://gohugo.io/getting-started/usage/

### Adding Companies

Companies should be added to [data/companies.toml](data/companies.toml) in order by company name alphabetically.

Format for adding a company:
```toml
[[company]]
name = "Company Name"
url = "https://www.example.com"
color = "#333333"
description = "Succinct company description"
badge = "Bozeman HQ"
```

All fields are required except badge.

- **color**: Hex format. One of the company's primary colors that is dark enough to display white text over.
- **badge**: Use badge only if the business is headquarted out of Bozeman or a surrounding city, otherwise use empty string.

### Adding Groups

Groups should be added to [data/community.toml](data/community.toml) in order by company name alphabetically.

Format for adding a group:
```toml
[[group]]
name = "Group Name"
url = "https://www.example.com"
color = "#ff0000"
description = "Succinct group description"
badge = "Coder"
```

All fields are required.

- **badge**: Primary type of group. Use one of the following: `Coder`, `Tech`, `Startups`

### Adding Events

Events should be added to [data/events.toml](data/events.toml) in order by event date ascending.

Format for adding an event:
```toml
[[event]]
title = "Event Name (Optional Hosting Group Name)"
date = "Wednesday, September 12, 2018"
url = "https://www.example.com"
description = "Event description / summary"
location = "Place Name"
map_url = "https://www.google.com/maps/?etc"
city = "Bozeman, MT"
```

All fields are required.

### Adding Jobs

Jobs should be added to [data/jobs.toml](data/jobs.toml) in order by job posted date descending.

Format for adding a job:
```toml
[[job]]
title = "Job Title"
job_url = "https://www.example.com"
post_date = "September 4, 2018"
description = "Job description / summary"
skills = "skill 1, skill 2, etc"
company = "Company Name"
companuy_url = "https://www.example.com"
city = "Bozeman, MT"
```

All fields are required.

### Adding Coworking & Spaces

Spaces should be added to [data/coworking.toml](data/coworking.toml) in order by name alphabetically.

Format for adding a space:
```toml
[[space]]
name = "Office Space Name"
url = "https://www.example.com"
description = "Succinct description"
address = "Full Address"
map_url = "https://www.google.com/maps?etc"
badge = "Coworking"
image = "os_picture.jpg"
```

All fields are required.

- **badge**: Primary type of space. Use one of the following: `Coworking`, `Office Space`, `Makerspace1`
- **image**: 400x200 jpg image of the space placed into [static/images/](static/images/)

## Author

[Bryce Johnston](https://github.com/beaorn)

## License

Tech Bozeman is licensed under the [MIT license](LICENSE.md)

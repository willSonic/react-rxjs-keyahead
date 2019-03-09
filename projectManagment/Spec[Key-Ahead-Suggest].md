

# Search
>Key Ahead Suggest
>Popper View
>Dialog of Selected Option


## Table of contents
* [Definition](#definition)
* [Data States](#data-states)
* [Visual States](#visual-states)
* [Architecture](#architecture)
	* [Visual Layer](#visual-layer)
    * [Business Layer](#business-layer)
	* [Data Layer](#data-layer)
---

##  Definition
In text field user begins typing. Each character input dispatches a request to Google Book API
in search of Book Titles that include Characters.The result of the request is displayed below the TextField Inputs.

User selects title from drop down list and dialog appears with information and image of Book with options.

If user 'Adds' Book it will be added as inventory in user's collection


## Data States



## Visual States
1. Popper States
   * Popper Not Visible
      * No Character enter
      * After User selects option in list
      * List is present-> User Re-Focuses TextField
      * User Inputs new Character
   * Popper Visible
      * User has enter text
      * User has clicked back on text field
2. Loader States
   * Loader Visible
     * Text is submitted as request





## Architecture


### Visual Layer
---

#### Containers
* Props State
* Props Action
* Local State


#### Components
* Local State


#### Common
* Material Module


#### Style


### Business Layer
---

#### connect-services

#### Routes

#### data-layer-services

#### visual-layer-services


### Data Layer
---

#### Redux Services
* Effects
* reducer
* selectors

#### API

#### Model

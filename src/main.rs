use enclose::enclose;
use headings::Head;
use links::Link;
use log::*;
use std::fmt::Debug;
use web_sys::HtmlInputElement;
use yew::prelude::*;

mod convert;
mod headings;
mod links;

#[derive(Properties, PartialEq)]
struct NumberInputProps {
    num_string: String,
    signed_mode: bool,
    update: Callback<Option<String>>,
}

#[derive(Properties, PartialEq)]
struct HexInputProps {
    hex_string: String,
    signed_mode: bool,
    update: Callback<Option<String>>,
}

#[derive(Properties, PartialEq)]
struct SignedModeInputProps {
    signed_mode: bool,
    update: Callback<bool>,
}

#[function_component]
fn NumberInput(
    NumberInputProps {
        num_string,
        update,
        signed_mode,
    }: &NumberInputProps,
) -> Html {
    let signed = *signed_mode;
    let minimum = (!signed).then_some("0");
    let on_input = enclose!((update) move |e: InputEvent| {
        let vec = e.target_dyn_into::<HtmlInputElement>()
            .map(|element| element.value());
        update.emit(vec)
    });
    html! {
        <>
            <label>
                <Head name="Decoded Number" level=2/>
                <input type="number" oninput={ on_input } value={ (*num_string).clone() } min={ minimum }/>
            </label>
        </>
    }
}

#[function_component]
fn HexInput(
    HexInputProps {
        hex_string, update, ..
    }: &HexInputProps,
) -> Html {
    let on_input = enclose!((update) move |e: InputEvent| {
        let vec = e
            .target_dyn_into::<HtmlInputElement>()
            .map(|element| element.value());
        update.emit(vec)
    });
    html! {
        <>
            <label>
                <Head name="Encoded Hex" level=2/>
                <input type="text" oninput={ on_input } value={ (*hex_string).clone() } />
            </label>
        </>
    }
}

#[function_component]
fn SignedModeInput(
    SignedModeInputProps {
        signed_mode,
        update,
    }: &SignedModeInputProps,
) -> Html {
    let on_change = enclose!((update) move |e: Event| {
        e.target_dyn_into::<HtmlInputElement>()
            .map(|element| update.emit(element.checked()));
    });
    html! {
        <>
            <label>
            { "Signed mode" }
            <input type="checkbox" checked={ *signed_mode } onchange={ on_change }/>
            </label>
        </>
    }
}

#[function_component]
fn About() -> Html {
    html! {
        <footer>
            <Head name="About" level=2 />
            <>
                { "Enter text in either box to convert it between " }
                <abbr title="Little Endian Base 128"> { "LEB128" } </abbr>
                { " and hexadecimal."}
            </>
            <br />
            <>
                <Link text="Source link" to="https://github.com/IFcoltransG/lebanon" />
                {" and "}
                <Link text="Wikipedia page" to="https://en.wikipedia.org/wiki/LEB128" />
            </>
            <br />
            <>
                { "Made using " }
                <Link text="Yew" to="https://yew.rs" />
                { ", packed with " }
                <Link text="Trunk" to="https://trunkrs.dev/" />
                { ", styled with " }
                <Link text="Simple.css" to="https://simplecss.org" />
                { ", served from " }
                <Link text="GitHub Pages" to="https://pages.github.com/" />
            </>
            <address> { "Written by IFcoltransG, who can be found on " } <Link text="GitHub" to="https://github.com/IFcoltransG" /> </address>
        </footer>
    }
}

#[function_component]
fn App() -> Html {
    /// Compare the value stored in state with a new one (according to key) and
    /// update if it doesn't match
    fn possibly_update<T, C, F>(current_value: &UseStateHandle<T>, new_value: T, key: F)
    where
        C: PartialEq,
        F: Fn(&T) -> C,
        T: Clone + Debug,
    {
        if key(&current_value) != key(&new_value) {
            info!("Chose to update variable with {:?}", new_value);
            current_value.set(new_value)
        }
    }
    let bytes_state = use_state_eq(|| vec![0x00]);
    let signed_state = use_state(|| false);
    let hex_state = use_state_eq(|| "00".to_string());
    let num_state = use_state_eq(|| "0".to_string());
    // callback that updates the state of the program
    let update = enclose!((bytes_state, hex_state, num_state, signed_state) move |value| {
        info!("Updating internal bytes to {:?}", value);

        let check_hex = |string: &String| convert::from_hex(string.clone());
        if let Some(new_hex) = convert::to_hex(&value) {
            info!("Trying hex update");
            possibly_update(&hex_state, new_hex, check_hex);
        } else {
            warn!("Trying hex overwrite");
            possibly_update(&hex_state, "".to_string(), check_hex)
        }

        let signed = *signed_state;
        let check_num = |string: &String| {
            if signed {
                convert::from_signed(string.parse().ok()?)
            } else {
                convert::from_unsigned(string.parse().ok()?)
            }
        };
        let new_num_wrapped = if signed {
            convert::to_signed(&value).map(|int| format!("{}", int))
        } else {
            convert::to_unsigned(&value).map(|int| format!("{}", int))
        };
        if let Some(new_num) = new_num_wrapped {
            info!("Trying num update");
            possibly_update(&num_state, new_num, check_num);
        } else {
            warn!("Trying num overwrite");
            possibly_update(&num_state, "NaN".to_string(), check_num)
        }

        bytes_state.set(value)
    });
    let update_hex = enclose!((update) move |hex_string| {
        let Some(hex_string) = hex_string else {return};
        let Some(vec) = convert::from_hex(hex_string) else {return};
        update(vec);
    });
    let update_num = enclose!((update, signed_state) move |num_string: Option<String>| {
        let signed = *signed_state;
        let Some(num_string) = num_string else {return};
        let wrapped_vec = 'bytes: {
            if signed {
                let Ok(parsed) = num_string.parse() else {break 'bytes None};
                convert::from_signed(parsed)
            } else {
                let Ok(parsed) = num_string.parse() else {break 'bytes None};
                convert::from_unsigned(parsed)
            }
        };
        let Some(vec) = wrapped_vec else {return};
        update(vec);
    });
    let update_signed = enclose!((signed_state) move |value: bool| {
        info!("Updating signed mode to {:?}", value);
        signed_state.set(value);
    });
    html! {
        <>
            <main id="main-content">
                <Head name={ "Online LEB128 Converter" } />
                <SignedModeInput signed_mode={ *signed_state } update={ update_signed }/>
                <HexInput hex_string={ (*hex_state).clone() } signed_mode={ *signed_state } update={ update_hex.clone() }/>
                <NumberInput num_string={ (*num_state).clone() } signed_mode={ *signed_state } update={ update_num.clone() }/>
            </main>
            <About />
        </>
    }
}

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::Renderer::<App>::new().render();
}

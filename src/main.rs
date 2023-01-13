use headings::Head;
use log::*;
use web_sys::HtmlInputElement;
use yew::prelude::*;

mod convert;
mod headings;

#[derive(Properties, PartialEq)]
struct InputProps {
    bytes: Vec<u8>,
    signed_mode: bool,
    update: Callback<Option<Vec<u8>>>,
}

#[derive(Properties, PartialEq)]
struct SignedModeInputProps {
    signed_mode: bool,
    update: Callback<bool>,
}

#[function_component]
fn NumberInput(
    InputProps {
        bytes,
        update,
        signed_mode,
    }: &InputProps,
) -> Html {
    let signed = *signed_mode;
    let minimum = (!signed).then_some("0");
    let number = if signed {
        info!("making signed number");
        format!("{}", convert::to_signed(&bytes).expect("to number"))
    } else {
        info!("making unsigned number");
        format!("{}", convert::to_unsigned(&bytes).expect("to number"))
    };
    let on_input = {
        let update = update.clone();
        move |e: InputEvent| {
            let vec = e.target_dyn_into::<HtmlInputElement>().and_then(|element| {
                let val = element.value();
                if signed {
                    // parse as signed integer
                    convert::from_signed(val.parse().ok()?)
                } else {
                    // parse as unsigned integer
                    convert::from_unsigned(val.parse().ok()?)
                }
            });
            update.emit(vec)
        }
    };
    html! {
        <>
            <label>
                <Head name="Decoded Number" level=2/>
                <input type="number" oninput={ on_input } value={ number } min={ minimum }/>
            </label>
        </>
    }
}

#[function_component]
fn HexInput(InputProps { bytes, update, .. }: &InputProps) -> Html {
    let hex = convert::to_hex(bytes).expect("to hex");
    // using onchange rather than oninput so that changes don't upset the cursor
    let on_change = {
        let update = update.clone();
        move |e: Event| {
            let vec = e
                .target_dyn_into::<HtmlInputElement>()
                .and_then(|element| convert::from_hex(element.value()));
            update.emit(vec)
        }
    };
    html! {
        <>
            <label>
                <Head name="Encoded Hex" level=2/>
                <input type="text" onchange={ on_change } value={ hex } />
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
    let on_change = {
        let update = update.clone();
        move |e: Event| {
            e.target_dyn_into::<HtmlInputElement>()
                .map(|element| update.emit(element.checked()));
        }
    };
    html! {
        <>
            <label>
            { "Signed mode" }
            <input type="checkbox" checked={ *signed_mode } onchange={ on_change }/>
            </label>
        </>
    }
}

#[function_component(App)]
fn app() -> Html {
    let bytes_state = use_state_eq(|| vec![0x00]);
    let signed_state = use_state(|| false);
    let update = {
        let state_handle = bytes_state.clone();
        // callback that updates the state of the program
        move |value: Option<Vec<_>>| {
            info!("Updating internal bytes to {:?}", value);
            if let Some(mut vec) = value {
                if vec.last().filter(|last| *last & 0x80 != 0).is_some() {
                    vec.push(0)
                }
                state_handle.set(vec)
            }
        }
    };
    let update_signed = {
        let signed_handle = signed_state.clone();
        move |value: bool| {
            info!("Updating signed mode to {:?}", value);
            signed_handle.set(value);
        }
    };
    html! {
        <>
            <Head name={ "LEB-128 Converter" } />
            <SignedModeInput signed_mode={ *signed_state } update={ update_signed }/>
            <HexInput bytes={ (*bytes_state).clone() } signed_mode={ *signed_state } update={ update.clone() }/>
            <NumberInput bytes={ (*bytes_state).clone() } signed_mode={ *signed_state } update={ update.clone() }/>
        </>
    }
}

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::Renderer::<App>::new().render();
}

use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct LinkProps {
    pub text: String,
    pub to: String,
}

#[function_component]
pub fn Link(LinkProps { text, to }: &LinkProps) -> Html {
    html! {
        <a href={ (*to).clone() } rel="noopener noreferrer"> {text} </a>
    }
}

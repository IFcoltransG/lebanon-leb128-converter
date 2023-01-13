use heck::ToKebabCase;
use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct HeadingProps {
    pub name: String,
    #[prop_or(1)]
    pub level: u8,
}

#[function_component]
pub fn Head(HeadingProps { level, name }: &HeadingProps) -> Html {
    let heading_tag = format!("h{}", level);
    html! {
        <@{heading_tag} id={ name.to_kebab_case() }> { name } </@>
    }
}

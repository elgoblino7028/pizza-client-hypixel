import styles from "../styles/AboutComponent.module.css";

export default function AboutComponent() {
    return (
        <article className={styles.about}>
            <h1 className={styles.title}>About the Software</h1>
            <p>
                {"Most notable features: (all auras and nukers use fake rotation packets) -Qol ice fill (still somewhat wip, works great for 150 or less ping) -Spirit Bear Aura (with triggerbot once a spirit bear spawns) -Simon Says Aura -Good Terminals -Mithril Macro -Gemstone Macro (still wip) -Nuker (good to use on hypixel) -Powder Macro (everything automatic, uses nuker for the block breaking) -Crop Aura (auto places any crop)"}
            </p>
            <p>
                {"All macros have failsafes, for example player detection or stop when getting warped out -Auto Enchanting -Auto Book Combine -Auto Salvage -Shoot terminator when left clicking with valk -Gemstone ESP -Hide Golden Goblins -Powder Chest Macro (there's also a mode to only use fake rotation to solve it) -Item Keybinds -Commission Esps -Alot of dungeon Esps -Auto Wardrobe -Anti sessionid stealer (works for getSessionID and getToken, still somewhat WIP?)"}
            </p>

            <p>
                {"There's still a shit ton more features, like a shit ton of esps and shit, but i cba mentioning them"}
            </p>
            <p>
                {"Upcoming: -Auto Fishing Macro -Pathfinding"}
            </p>
        </article>
    );
}
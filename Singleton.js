class ThemeSettings {
    constructor() {
        if (ThemeSettings.instance instanceof ThemeSettings)
            return ThemeSettings.instance;

        this.ThemeSettingsObj = {
            'color': '#000000',
            'font': 'Serif',
            'layout': '1'
        };
        ThemeSettings.instance = this;
    }

    get(key) {
        return this.ThemeSettingsObj[key];
    }

}
export default function useNavigation() {
    return {
        goTo: function (page: any) {
            window.location = page;
        },
        back: function () {
            history.back();
        },
    };
}

/**
 * @toc {BBM} Settings
 * @featureID blackberry.bbm.platform
 * @namespace Provides read access to BBM Connected Application settings.
 * @BB50+
 */
blackberry.bbm.platform.settings = {

    /**
     * @description Whether the application profile box appears in the current user's BBM profile.
     * <p>See {@link blackberry.bbm.platform.self.profilebox}
     * @type Boolean
     * @readOnly
     * @BB50+
     */
    profileboxEnabled: false,
    
    /**
     * @description Whether a prompt is shown when hosting a public connection or requesting to join a public connection.
     * <p><code>true</code> if the prompt is never shown; <code>false</code> otherwise.
     * <p>See {@link blackberry.bbm.platform.io.host} and {@link blackberry.bbm.platform.io.joinHost}
     * @type Boolean
     * @readOnly
     * @BB50+
     */
    alwaysAllowPublicConns: false
};

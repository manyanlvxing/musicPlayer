class CacheMgr {
    constructor() {
        this._cache = new Map;
    }
    getData(key) {
        return this._cache.get(key);
    }
    setData(key, info) {
        this._cache.set(key, info);
    }
    hasData(key) {
        return this._cache.has(key);
    }
}
//简易的缓存系统
export default new CacheMgr;
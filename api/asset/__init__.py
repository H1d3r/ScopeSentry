# -------------------------------------
# @file      : __init__.py
# @author    : Autumn
# @contact   : rainy-autumn@outlook.com
# @time      : 2024/10/20 19:12
# -------------------------------------------
from fastapi import APIRouter

from .asset import router as asset_routeer
from .subdomain import router as subdomain_route
from .url import router as url_route
from .crawler import router as crawler_route
from .common import router as common_route
from .sensitive import router as sens_route
router = APIRouter()

router.include_router(asset_routeer, prefix="/asset")
router.include_router(subdomain_route, prefix="/subdomain")
router.include_router(url_route, prefix="/url")
router.include_router(crawler_route, prefix="/crawler")
router.include_router(common_route, prefix="/data")
router.include_router(sens_route, prefix="/sensitive")
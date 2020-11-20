json.partial! 'spot', spot: @spot

json.area do 
    json.partial! 'api/areas/area', area: @spot.area
end

json.essential do 
    json.partial! 'api/essentials/essential', essential: @spot.essential
end

json.amenity do 
    json.partial! 'api/amenities/amenity', amenity: @spot.amenity
end

json.detail do 
    json.partial! 'api/details/detail', detail: @spot.detail
end



    # json.partial! 'detail', detail: detail
# end
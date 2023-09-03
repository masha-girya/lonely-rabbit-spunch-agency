from wagtail.api.v2.serializers import StreamField as WagtailStreamField
from wagtail.api.v2.serializers import BaseSerializer


class NewsImageSerializer(BaseSerializer):
    def to_representation(self, instance):
        return {
            'url': instance.file.url,
            'width': instance.width,
            'height': instance.height,
            'title': instance.title,
        }


class NewsBodySerializer(WagtailStreamField):
    def to_representation(self, value):
        data = []
        for block in value:
            print(block.block_type)
            if block.block_type == 'paragraph' or block.block_type == 'h1' or block.block_type == 'h2':
                data.append({
                    "type": block.block_type,
                    "value": block.value
                })
            if block.block_type == 'image':
                serializer = NewsImageSerializer()
                data.append({
                    "type": block.block_type,
                    "value": serializer.to_representation(block.value)
                })
        return data
